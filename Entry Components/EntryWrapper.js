import React, { useEffect, useState } from "react";
import { Entry } from "./Entry";
import { EntryForm } from "./EntryForm";
import { v4 as uuidv4 } from "uuid";
import { EditEntryForm } from "./EditEntryForm";
import { useNavigate } from "react-router-dom";

export const EntryWrapper = (loggedIn) => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn.status) navigate("/login");
  });

  const addEntry = (entry) => {
    setEntries([
      ...entries,
      { id: uuidv4(), task: entry, completed: false, isEditing: false },
    ]);
  }

  const deleteEntry = (id) => setEntries(entries.filter((entry) => entry.id !== id));

  const toggleComplete = (id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, completed: !entry.completed } : entry
      )
    );
  }

  const editEntry = (id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isEditing: !entry.isEditing } : entry
      )
    );
  }

  const editTask = (task, id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, task, isEditing: !entry.isEditing } : entry
      )
    );
  };

  return (
    <>
      <header>
        <nav>
          <a href="index.html" id="homeButton">
            Home
          </a>
          <div id="navButtons">
            <button id="goalBuddy">Goal Buddy</button>
            <button id="studyBuddy">Study Buddy</button>
            <button id="chatBuddy">Chat Buddy</button>
            <button id="shortTermGoals">Short Term Goals</button>
            <button id="longTermGoals">Long Term Goals</button>
          </div>
        </nav>
      </header>
      <main>
        <section id="journalSection">
          <h1>My Journal Buddy</h1>
          <div id="main-divider">
            <a href="journal.html" id="section">
              Journals
            </a>
            <a href="entries.html" id="section">
              Entries
            </a>
          </div>
          <div class="entry-image-upload">
            <label for="entryImage">
              Upload a cover image for your diary entry:
            </label>
            <input
              type="file"
              id="entryImage"
              name="entryImage"
              accept="image/*"
            />
          </div>
          {/* <div class="search-filter">
            <input
              type="text"
              id="searchEntries"
              placeholder="Search diary entries..."
            />
            <a href="create.html" id="createEntry">
              Create
            </a>
          </div>
          <div id="entries" class="entries-grid">
            {Entries will be loaded here by JavaScript}
          </div> */} 
          <div className="EntryWrapper">
            <EntryForm addEntry={addEntry} />
            {/* display entries */}
            {entries.map((entry) =>
              entry.isEditing ? (
                <EditEntryForm 
                  editEntry={editTask} 
                  task={entry} />
              ) : (
                <Entry
                  key={entry.id}
                  task={entry}
                  deleteEntry={deleteEntry}
                  editEntry={editEntry}
                  toggleComplete={toggleComplete}
                />
              )
            )}
          </div>
        </section>
        <aside>
          <div id="favoritesContainer">
            <div id="favorites">
              <h2>Favorites❤️</h2>
              {/* List favorite entries here */}
            </div>
          </div>
          <div id="recentsContainer">
            <div id="recents">
              <h2>Recents</h2>
              {/* List recent entries here */}
            </div>
          </div>
        </aside>
      </main>
      {/* <footer>
        <div id="chatInterface">
          <button id="openChat">Chat Buddy</button>
        </div>
      </footer> */}
    </>
  );
};