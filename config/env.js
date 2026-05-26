const env = {
...,
  NODE_ENV: process.env.NEXT_PUBLIC_CUSTOM_NODE_ENV ?? process.env.NODE_ENV,
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_CUSTOM_NODE_ENV ?? process.env.NODE_ENV,
};
