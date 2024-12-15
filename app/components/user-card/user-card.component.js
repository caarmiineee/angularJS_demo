// Componente per mostrare le informazioni di un utente
app.component('userCard', {
    bindings: {
        user: '<'
    },
    templateUrl: 'app/components/user-card/user-card.html',
    controller: function() {
        this.$onInit = function() {
            console.log("Dati ricevuti nel componente:", this.user);
        };
    }
});
