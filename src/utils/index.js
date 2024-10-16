export const calcularOrcamentoDiario = (rendaMensal) => {
  return parseInt(rendaMensal / 30);
};

export const calcularProgressoMeta = (
  orcamentoDiario,
  rendaMensal,
  objetivoFinanceiro
) => {
  let meta = 0;
  switch (objetivoFinanceiro) {
    case "economizar":
      meta = rendaMensal * 0.2;
      return ((orcamentoDiario / meta) * 100).toFixed(0);
    case "investir":
      meta = rendaMensal * 0.15;
      return ((orcamentoDiario / meta) * 100).toFixed(0);
    case "controlar-gastos":
      meta = rendaMensal * 0.8;
      return (((meta - orcamentoDiario) / meta) * 100).toFixed(0);
    default:
      return 0;
  }
};

export const geraId = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
