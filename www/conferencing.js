/*
 * Tropo Learning Lab - Conferencing
 * Level: Intermediate
 */

//todo: figure out how to have the app call someone and place them into conference

say("Welcome to the conference setup app");

addPeople();

conference("5555", {
    terminator: "*",
    playTones: true,
    onChoice: function(event){
        say("Disconnecting");
    }
});

function addPeople(){
    var shouldAdd = false;
    while (shouldAdd === true) {
        ask("Enter a 10-digit number of someone to add to the conference.",
            {
                choices: "[10 DIGITS]",
                onChoice: function (event) {
                    call(event.value, {
                        onAnswer: function () {
                            say("Placing you into the conference call. Enter the conference I.D.");
                        }
                    });
                }
            });
        ask("Would you like to add another person?",{
            choices: "yes,no",
            onChoice: function(event){
                if(event.value === "no"){
                    shouldAdd = false;
                }
            }
        })
    }

}