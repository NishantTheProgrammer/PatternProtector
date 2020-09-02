const app = new Vue({
    el: '#app',
    data() {
        return {
            authUserName: '',
            patternPanel: false,
            patternArray: [],
            cordinates: [
                {},                     // an empty object to avoid confusion
                {x: 50, y: 50},
                {x: 150, y: 50},
                {x: 250, y: 50},

                {x: 50, y: 150},
                {x: 150, y: 150},
                {x: 250, y: 150},

                {x: 50, y: 250},
                {x: 150, y: 250},
                {x: 250, y: 250},
            ],
            email: ''
        }
    },
    methods: {
        hoverOnNode(event){
            if(event.buttons == 1 || event.buttons == 3){
                console.log(`previews value ${this.patternArray[this.patternArray.length - 1]} new value ${event.target.id}`)

                if(this.patternArray[this.patternArray.length - 1] != event.target.id &&    // don't add if user hover on last node
                    this.patternArray[this.patternArray.length - 2] != event.target.id)     // don't add if user hover on second last node
                {
                    this.patternArray.push(event.target.id);
                } 
            }
        },
        authenticate(){
            if(this.patternArray.length > 1)
            {

                axios.post('authenticate.php', {
                    email: this.email,
                    pattern: this.patternArray.join('')
                })
                .then(function (response) {
                    app.authUserName = response.data;
                    console.log(app.authUserName);
                    app.patternArray = [];
                })
                .catch(function (error) {
                    console.log(error);
                });

                

            }
        }
    }
});


window.addEventListener('onmouseup', app.authenticate())

