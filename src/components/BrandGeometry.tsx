export default function BrandGeometry() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="brand-geometry brand-geometry-top-right" />
      <div className="brand-geometry brand-geometry-bottom-left" />
      <div className="brand-dot-cluster brand-dot-cluster-left" />
      <div className="brand-dot-cluster brand-dot-cluster-right" />
    </div>
  );
}
