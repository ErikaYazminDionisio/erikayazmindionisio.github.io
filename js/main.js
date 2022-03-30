const firebaseConfig = {

    apiKey: "AIzaSyBUYJRXAQ2jjNWOn1NsWlwZAOxMyFDe7tc",
  
    authDomain: "proyecto-web-e699e.firebaseapp.com",
  
    projectId: "proyecto-web-e699e",
  
    storageBucket: "proyecto-web-e699e.appspot.com",
  
    messagingSenderId: "257726939942",
  
    appId: "1:257726939942:web:fb5427b5d991b1b05c77e7",
  
    measurementId: "G-NMS601VVJ4"
  
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
