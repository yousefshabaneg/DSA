// Greedy Activity Selection Algorithm

type Activity = {
  start: number;
  end: number;
};

function greedyActivitySelectionAlgorithm(activities: Array<Activity>) {
  if (!activities.length) return null;
  const results = [];
  results.push({ ...activities[0], i: 0 });
  let i = 1,
    j = 0;

  for (i; i < activities.length; i++) {
    if (activities[i].start >= activities[j].end) {
      results.push({ ...activities[i], i });
      j = i;
    }
  }

  return results;
}

const activities = [
  { start: 9, end: 11 },
  { start: 10, end: 11 },
  { start: 11, end: 12 },
  { start: 12, end: 14 },
  { start: 13, end: 15 },
  { start: 15, end: 16 },
];

const selected = greedyActivitySelectionAlgorithm(activities);

console.log({ selected });
