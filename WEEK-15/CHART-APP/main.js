let notes = JSON.parse(localStorage.getItem("notes")) || [];

    const input = document.getElementById("noteInput");
    const container = document.getElementById("notesContainer");

    function saveNotes() {
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    function renderNotes() {
      container.innerHTML = "";

      notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
          <span>${note}</span>
          <button class="delete" onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);
      });
    }

    function addNote() {
      const value = input.value.trim();

      if (value === "") return;

      notes.push(value);
      saveNotes();
      renderNotes();

      input.value = "";
    }

    function deleteNote(index) {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    }

    // Initial render
    renderNotes();