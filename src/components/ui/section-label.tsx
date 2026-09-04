interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
