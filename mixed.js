
const bloodType = ['A', 'B', 'AB', 'O'];

const peopleFactory = (blood, isPositive) => {
      return{
            _blood: blood,
            _isPositive: isPositive,
            _trait: determineTrait(blood, isPositive),
            get blood(){
                  return this._blood;
            },
            set blood(blood){
                  this._blood = blood;
            },

            get isPositive(){
                  return this._isPositive;
            },
            set isPositive(isPositive){
                  this._isPositive = isPositive;
            },

            get trait(){
                  return this._trait;
            },
            set trait(trait){
                  this._trait = trait;
            }
      }
}

const determineTrait = (blood, isPositive) => {
      let trait = [];
      if(isPositive){
            switch(blood){
                  case 'A':
                        trait.push('Earnest', 'Neat');
                        break;
                  case 'B':
                        trait.push('Passionate', 'Creative');
                        break;
                  case 'AB':
                        trait.push('Talented', 'Composed');
                        break;
                  case 'O':
                        trait.push('Easygoing', 'A Leader');
                        break;   

            }
      }else{
            switch(blood){
                  case 'A':
                        trait.push('Stubborn', 'Anxious');
                        break;
                  case 'B':
                        trait.push('Selfish', 'Uncooperative');
                        break;
                  case 'AB':
                        trait.push('Eccentric', 'Two-faced');
                        break;
                  case 'O':
                        trait.push('Insensitive', 'Unpunctual');
                        break;   

            }
      }
      return trait;
}

let jane = peopleFactory(bloodType[1], true);

console.log(jane.trait);
