import { initCloudStorage } from '@tma.js/sdk';

const [cloudStorage] = initCloudStorage();

function isKeyExist(){

cloudStorage
  .getKeys()
  .then((keys) => {
        console.log('Keys are', keys);

        if (!keys.includes('score')) {
            scoreAPP = 0
            cloudStorage
                .set('score', scoreAPP)
        }
        
        if (!keys.includes('tapValue')) {
            tapValueAPP = 1
            cloudStorage
                .set('tapValue', tapValueAPP)
        }
        
        if (!keys.includes('tapValue')) {
            energyAPP = 1000
            cloudStorage
                .set('energy', energyAPP)
        }
    })
}





function saveItemsToCloud(){

scoreAPP = localStorage.getItem('score');
tapValueAPP = localStorage.getItem('tapValue');
energyAPP = localStorage.getItem('energy');

cloudStorage
  .set('score', scoreAPP)
  .then(() => console.log('Score Item saved'));

cloudStorage
  .set('tapValue', tapValueAPP)
  .then(() => console.log('tapValue Item saved'));

cloudStorage
  .set('energy', energyAPP)
  .then(() => console.log('energy Item saved'));

}



function loadItemsFromCloud(){

    cloudStorage
        .get('score')
        .then((value) => {
            console.log(value);
        });

    cloudStorage
        .get('tapValue')
        .then((value) => {
            console.log(value);
        });
    
    cloudStorage
        .get('energy')
        .then((value) => {
            console.log(value);
        });
}