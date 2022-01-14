const firebaseConfig = {

    apiKey: "AIzaSyAGqPsx3JCx_TelMxPlqt6qea4pM4P2Jdo",
    
    authDomain: "vue-crud-54ccb.firebaseapp.com",
    
    projectId: "vue-crud-54ccb",
    
    storageBucket: "vue-crud-54ccb.appspot.com",
    
    messagingSenderId: "822397294123",
    
    appId: "1:822397294123:web:68d2389dbba477f829fc6e",
    
    measurementId: "G-YXGK8YGZ1H"
    
    };
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const coleccion = db.collection('usuarios');

    
    
    new Vue({
    //Punto de anclaje
        el:'#main',
    //modelo
        data:{
            nombre:null,
            apellido:null,
            email:null,
            destino:null,
            edad:null,
        //reinicia modelo de usuarios a 0
            usuarios:[]
        },
        mounted(){
    //Inicializa los usuarios
            this.usuarios= []
    //Realiza la petición y vuelve a traer los datos
            coleccion.get().then( (r) => r.docs.map( (item) => this.usuarios.push({id:item.id, data:item.data()})))
        },
        methods:{
            addUser(){
                coleccion.add({
                nombre:this.nombre,
                apellido:this.apellido,
                email:this.email,
                destino:this.destino,
                edad:this.edad
                
            //Se dirige al metodo mounted y ejecuta nuevamente
                }).then( ()=> this.$mount())
                
                 this.nombre = null; 
                 this.apellido = null;
                 this.email=null;
                 this.destino = null;
                 this.edad = null;  
                
                
            },
    //Toma el id del dato elegido
            updateUser(id){
        //Se posiciona en el dcumento a utilizar
        //Seguido de su id
        //Colocados dentro del objeto edad y nombre
        //$mount- recarga la página
                coleccion.doc(id).set({nombre:this.nombre,apellido:this.apellido,email:this.email,destino:this.destino, edad:this.edad }).then( () => this.$mount())
            },
            deleteUser(id){
               
                coleccion.doc(id).delete().then( () => this.$mount())
            }
        }
    })