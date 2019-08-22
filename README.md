## ang-loader

ang-loader is a lightweight plug-and-play loader library based on Angular 7.

## Installation

```bash
npm install ang-loader
```

## Usage

Import ```AngLoaderModule``` in your application module

```
import { AngLoaderModule } from 'ang-loader';

@NgModule({
  imports: [
    AngLoaderModule
  ]
});
```
Add the ```ang-loader``` child component to your component

```
<ang-loader></ang-loader>
```

Import ```AngLoaderService``` in your component

```
import { AngLoaderService } from 'ang-loader';

export class AppComponen {

  constructor(private loader: AngLoaderService) {}
}
```

To show loader, simply call the ```AngLoaderService``` function show()

```
this.loader.show();
``` 

To hide loader, simply call the ```AngLoaderService``` function hide()

```
this.loader.hide();
``` 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License.
