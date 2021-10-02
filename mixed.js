
const bloodType = ['A', 'B', 'AB', 'O'];

const peopleFactory = (blood, isPositive, trait) => {
      return{
            _blood: blood,
            _isPositive: isPositive,
            _trait: trait,
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

}

let jane = peopleFactory(bloodType[1], true, trait);
