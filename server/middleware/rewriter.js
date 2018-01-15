import history from 'connect-history-api-fallback';

function makeKoaConnectHistoryApiFallbackAdapter(options) {
  const middleware = history(options);
  const noop = function () {};

  return function koaConnectHistoryApiFallbackAdapter(ctx, next) {
    middleware(ctx, null, noop);
    return next();
  };
}

export default makeKoaConnectHistoryApiFallbackAdapter;
