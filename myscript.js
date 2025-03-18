// JavaScript Document


 function showResults() {
  let selectedOption = document.querySelector('input[name="Cats Vs. Dogs"]:checked');
  let resultsDiv = document.getElementById('results');
 
 document.getelementarybyid('voteButton').addEvebtListner('click,showResults');
 }
  if (selectedOption) {
    resultsDiv.textContent = `You voted for: {selectedOption.value}`;
  } 
  else { resultsDiv.textContent = "Please select an option.";
  }
}