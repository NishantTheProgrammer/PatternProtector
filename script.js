const app = new Vue({
    el: '#app',
    data() {
        return {
            patternPanel: false,
            patternArray: []
            

        }
    },
    methods: {
        hoverOnNode(event){

            if(event.buttons == 1 || event.buttons == 3){

                console.log(`previews value ${this.patternArray[this.patternArray.length - 1]} new value ${event.target.id}`)

                if(this.patternArray[this.patternArray.length - 1] != event.target.id)
                {
                    this.patternArray.push(event.target.id);
                }

                
            }


            
        },
        authenticate(){
            if(this.patternArray.length > 1)
            {
                alert(`Pattern: ${this.patternArray.join('')}`);
                this.patternArray = [];
            }
        }
    }
});


window.addEventListener('onmouseup', app.authenticate())

