/**
 * ActionPotential.AI — Interactive neural network & UX enhancements
 *
 * CONFIG: Replace BOOKING_URL with your Calendly/booking link when ready
 */
const BOOKING_URL = '#cta'; // e.g. 'https://calendly.com/actionpotential/audit'

(function() {
  'use strict';

  // ============================================
  // Neural Network Canvas Animation
  // ============================================
  const NeuralNetwork = {
    canvas: null,
    ctx: null,
    nodes: [],
    connections: [],
    colors: ['#79C5C7', '#2EA6D4', '#00A79D', '#1B75BB'],
    nodeCount: 60,
    connectionDistance: 150,
    mouse: { x: null, y: null },

    init() {
      this.canvas = document.getElementById('neuralCanvas');
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.resize();
      this.createNodes();
      this.animate();
      window.addEventListener('resize', () => this.resize());
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
      window.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    },

    resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.canvas.style.width = width + 'px';
      this.canvas.style.height = height + 'px';
      this.createNodes();
    },

    createNodes() {
      this.nodes = [];
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < this.nodeCount; i++) {
        this.nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          baseOpacity: 0.3 + Math.random() * 0.5
        });
      }
    },

    animate() {
      if (!this.ctx || !this.canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      this.ctx.clearRect(0, 0, width, height);

      // Update nodes
      this.nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction - subtle repulsion
        if (this.mouse.x !== null) {
          const dx = node.x - this.mouse.x;
          const dy = node.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            node.x += (dx / dist) * force * 2;
            node.y += (dy / dist) * force * 2;
          }
        }
      });

      // Draw connections
      this.nodes.forEach((nodeA, i) => {
        this.nodes.slice(i + 1).forEach(nodeB => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < this.connectionDistance) {
            const opacity = (1 - dist / this.connectionDistance) * 0.15;
            this.ctx.beginPath();
            this.ctx.moveTo(nodeA.x, nodeA.y);
            this.ctx.lineTo(nodeB.x, nodeB.y);
            this.ctx.strokeStyle = `rgba(121, 197, 199, ${opacity})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        });
      });

      // Draw nodes
      this.nodes.forEach(node => {
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const hex = node.color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${node.baseOpacity})`;
        this.ctx.fill();
      });

      requestAnimationFrame(() => this.animate());
    }
  };

  // ============================================
  // Mobile Navigation
  // ============================================
  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        links.classList.toggle('active');
        toggle.classList.toggle('active');
      });

      // Close nav when clicking a link
      links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          links.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('active');
        });
      });
    }
  }

  // ============================================
  // Scroll Animations (Intersection Observer)
  // ============================================
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Add animation classes to elements
    const animateElements = document.querySelectorAll(
      '.problem-card, .stage, .service-card, .different-card, .phase, .growth-drivers'
    );
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    // Add CSS for animate-in
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      .problem-card.animate-in { transition-delay: calc(var(--i, 0) * 0.05s); }
      .stage.animate-in { transition-delay: calc(var(--i, 0) * 0.05s); }
      .service-card.animate-in { transition-delay: calc(var(--i, 0) * 0.05s); }
    `;
    document.head.appendChild(style);

    // Add stagger index
    document.querySelectorAll('.problem-card').forEach((el, i) => el.style.setProperty('--i', i));
    document.querySelectorAll('.stage').forEach((el, i) => el.style.setProperty('--i', i));
    document.querySelectorAll('.service-card').forEach((el, i) => el.style.setProperty('--i', i));
  }

  // ============================================
  // Header scroll effect
  // ============================================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.style.padding = '0.75rem 0';
      } else {
        header.style.padding = '';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // Smooth scroll for anchor links
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ============================================
  // CTA links - use BOOKING_URL for primary CTAs
  // ============================================
  function initCTALinks() {
    document.querySelectorAll('a[href="#cta"]').forEach(link => {
      if (typeof BOOKING_URL === 'string' && BOOKING_URL && BOOKING_URL !== '#cta') {
        link.setAttribute('href', BOOKING_URL);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
      link.setAttribute('aria-label', 'Schedule your free AI Audit and Marketing Strategy Session');
    });
  }

  // ============================================
  // Initialize on DOM ready
  // ============================================
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runInit);
    } else {
      runInit();
    }
  }

  function runInit() {
    NeuralNetwork.init();
    initNav();
    initScrollAnimations();
    initHeaderScroll();
    initSmoothScroll();
    initCTALinks();
  }

  init();
})();
