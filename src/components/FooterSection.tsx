const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2025 Ruan Rabello. Todos os direitos reservados.</p>
        <p className="font-mono">
          Feito com <span className="text-primary">♥</span> no Rio de Janeiro
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
