let poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  let voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  poll.set(option, voters);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let results = ["Poll Results:"];
  for (let [option, voters] of poll) {
    results.push(`${option}: ${voters.size} votes`);
  }
  return results.join("\n");
}

console.log(addOption("Option 1"));
console.log(addOption("Option 2"));
console.log(addOption("Option 3"));

console.log(vote("Option 1", "user1"));
console.log(vote("Option 2", "user2"));
console.log(vote("Option 1", "user3"));
console.log(vote("Option 3", "user4"));
console.log(vote("Option 1", "user1"));

console.log(displayResults());
