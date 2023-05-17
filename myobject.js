const kotel = {
    name : {manufacturer: "lg",
            model: 13,
           },

    //тепература
    temperature: 19,
    
    //рекомендация от системы котла))
    recommendation: "рекомендуем отключить котел",

    //время работы в часах
    workingHours: 0,

    //отображает состояние работы "включен" или "выключен"
    mode: "включен",

    //повышает температуру
    temperaturePlus: function (){
        this.temperature++,
        this.workingHours++
    },

    //понижает температуру
    temperatureMinus: function () {
    this.temperature--
    
    },

    //кнопка включить/выключить
    kotelTurnOnn: function(){
        if(this.mode === "включен"){ 
            this.mode = "выключен"
        }else {this.mode = "включен"}
    },
    //статус
    status: function(){
        console.log(kotel.mode + ", Температура:"+ kotel.temperature + ", Работа в часах:" + this.workingHours)
    },
    //определяет по темературе включен котел или выключен, и дает рекмендацию
    workCalculation: function(){
        if(this.temperature <= 19) {
            this.workingHours = 0;
            this.mode = "выключен"
            console.log(kotel.mode + ", Температура:"+ kotel.temperature + ", Работа в часах:" + this.workingHours + ", Рекомендуем включить котел")
        }
    }
    
}
kotel.workCalculation()

