import 'zone.js/dist/zone-node';
import { log }              from 'util';
import * as path            from 'path';
import express              from 'express';
import { enableProdMode }   from '@angular/core';
import { ngExpressEngine }  from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();

const DIST_FOLDER = path.join(process.cwd(), './dist');
const PORT = process.env.PORT0 || 4200;
const app = express();

const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist/server/main.bundle`);

const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
    providers: [provider]
  })
);

app.set('view engine', 'html');
app.set('views', path.join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(path.join(DIST_FOLDER, 'browser')));

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  try {
    res.render(path.join(DIST_FOLDER, 'browser', 'index.html'), {
      req: req,
      res: res
    });
  }
  catch (e) {
    console.log('render error', e.message);
  }

  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
