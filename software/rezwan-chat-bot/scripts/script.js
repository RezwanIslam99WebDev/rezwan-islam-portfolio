function enter_value() {
    
    let ques_data=[
    "Hi",
    "Hellow",
    "What is your name?",
    "My name is Rezwan Islam",
    "How are you?",
    "I am fine",
    "Where is your home?",
    "Nalta Sharif, Kaliganj, Satkhira",
    "What is your qualification?",
    "Graduate: B.Sc. in Computer Science & Engineering at Eastern University",
    "What is your skill?",
    "I am an expert on these topics: C, Python, JavaScript, php, HTML, CSS, Bootstrap, MySQL Database",
    "what is your contact number?",
"01714-223445"    
    ];
    let lower_ques_data=ques_data.map(value=>value.toLowerCase());
    
    const input_value = document.getElementById("user_input").value.toLowerCase();
    
    for(j=0;j<lower_ques_data.length;j++){
            if(lower_ques_data[j]==input_value){
                document.getElementById("output").innerHTML = ques_data[j+1];
                if(input_value==lower_ques_data[0])
                {
                    document.getElementById("output").innerHTML = ques_data[1];
                }
else if(input_value==lower_ques_data[1]){
    document.getElementById("output").innerHTML = ques_data[0];
}                
            }
    }
}

