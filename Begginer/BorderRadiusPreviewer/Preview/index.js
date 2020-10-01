console.log('Lendo index.js');

import Load from './Load.js'

import UpdateController from './UpdateController.js'
import GetState from './GetState.js'
import Update from './Update.js'
import Reset from './Reset.js'
import CopyToClipboard from './CopyToClipboard.js'
import ShowMessage from './ShowMessage.js'

const Preview = {};

GetState(Preview);
CopyToClipboard(Preview);

Update(Preview);
Reset(Preview);
Load(Preview);
UpdateController(Preview);
ShowMessage(Preview);


console.log(Preview);


export default Preview;