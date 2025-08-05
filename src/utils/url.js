
export const getUrl = (path = '') => {
  const base = import.meta.env.BASE_URL || '/';
  // Asegurarse de que la ruta empiece con /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Evitar doble slash
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
};

export const getAssetUrl = (assetPath) => {
  return getUrl(assetPath);
};