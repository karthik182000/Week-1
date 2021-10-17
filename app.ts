// classes
class Car {
    Company Name: string;
    Model: string;
    Rating Protection: number;
    amount: number;
  
    constructor(c: string, M: string, R: number,a:number){
      this.Company Name = c;
      this.Model = M;
      this.Rating Protection=R;
      this.amount = a;
    }
  
    format() {
      return `${this.Company Name} charges £${this.amount} for ${this.Model}` at  ${this.Rating Protection};
    }
  }

  class bike {
    Company Name: string;
    Model: string;
    Rating Protection: number;
    amount: number;

    constructor(c: string, M: string, R: number,a:number){
      this.Company Name = c;
      this.Model = M;
      this.Rating Protection=R;
      this.amount = a;
    
  
   
    }
  
    format() {
      return `${this.Company Name} charges £${this.amount} for ${this.Model}` at  ${this.Rating Protection};
    }
  }
  
 
  
  
  
  
 
  
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  //console.log(form.children);
  
  // inputs
  const type = document.querySelector('#automobile') as HTMLInputElement;
  const tofrom = document.querySelector('#Company Name') as HTMLInputElement;
  const details = document.querySelector('#Model') as HTMLInputElement;
  const Rating Protection = document.querySelector('#Rating Protection') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      Automobile.value, 
      Company Name.value, 
      Model.value, 
      Rating Protection.value,
      amount.valueAsNumber
    );
  });
