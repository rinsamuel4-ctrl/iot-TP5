/*
 * hook_flag.js
 * Script Frida pour intercepter et forcer la validation du flag dans InjuredAndroid
 */

Java.perform(function() {
    console.log("[*] Script Frida chargé avec succès !");

    // Cibler la classe FlagOneActivity
    var FlagOneActivity = Java.use('b3nac.injuredandroid.FlagOneActivity');

    // Hook de la méthode submitFlag
    FlagOneActivity.submitFlag.implementation = function(input) {
        console.log('[*] submitFlag appelée avec la valeur : ' + input);

        // On peut afficher le flag attendu s'il est comparé ici, 
        // ou forcer l'appel avec la valeur correcte.
        var correctFlag = "F1Ag_0n3_5ucc355"; // Exemple de flag
        console.log('[*] Forçage de la validation avec le flag : ' + correctFlag);

        var ret = this.submitFlag(correctFlag);
        console.log('[*] Valeur de retour de la méthode originale : ' + ret);

        return ret;
    };
});
