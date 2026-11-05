const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const bookOfMormonBooks = [
  "1 nephi",
  "2 nephi",
  "jacob",
  "enos",
  "jarom",
  "omni",
  "mormon",
  "mosiah",
  "alma",
  "helaman",
  "3 nephi",
  "4 nephi",
  "mormon",
  "ether",
  "moroni"
];

button.addEventListener("click", function(){
    if(input.value.trim() !== "") {
        for (let i = 0 ; i < bookOfMormonBooks.length; i++){
            if (input.value.toLowerCase().startsWith(bookOfMormonBooks[i])){
                break;
            }
            else if (i == bookOfMormonBooks.length - 1){
                alert("Enter a valid book of mormon book name.\nAdvice:\n- Do not add 'Book of...' at the start of the name\n- Add an space after the numbers\n Example: \Valid: 3 Nephi 5, Alma 23, 1 Nephi 7\nInvalid: 4Nephi 7, Second book of Nephi 10, Book of Mormon");
                return;
            }
        }

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label","remove")
        deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus()
        });
        li.append(deleteButton);
        list.append(li);
        input.value = "";
        input.focus();
    }
    else{
        alert("The field can't be empty. Write your favorite Book of Mormon Chapter");
        input.focus();
    }

});
