/**
 * All Tests Pass: Week 1
 * Provide a class that calculates the total score of a bowling game.
 *
 * Class should expose one method, score(). Score
 * should accept an arbitrary number of integers representing individual
 * throws.
 *
 * Class should also expose the property totalScore, which shows the current
 * score for the game. This implementation is calculated via a get accessor method,
 * but you can choose to re-implement as you wish.
 *
 * Reference:
 * https://en.wikipedia.org/wiki/Ten-pin_bowling#Traditional_scoring
 */

class BowlingScoreTracker {
    constructor() {
        
    }

    score() {

    }

    clear() {
    }

    get totalScore () {

    }

    get currentFrame () {

    }

    isSpare(index) {

    }

    isEndOfFrame(index) {

    }
}

describe("Week 1 - Bowling", function() {
    it ("Should initialize at totalScore of 0", function() {
        let tracker = new BowlingScoreTracker();
        chai.assert.equal(tracker.totalScore, 0, "Score starts with 0");
        chai.assert.equal(tracker.currentFrame, 1, "Frame starts at 1");
    });

    it ("Should take a single frame score, and calculate open frame scoring correctly.", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(1);
        chai.assert.equal(tracker.totalScore, 1, "One roll's worth of score is 1.");
        chai.assert.equal(tracker.currentFrame, 1, "One roll is still in the first frame.");
        tracker.score(5);
        chai.assert.equal(tracker.totalScore, 6, "Two rolls score is 6.");
        chai.assert.equal(tracker.currentFrame, 2, "Two rolls starts the second frame.");
    });

    it ("Should take a single frame score, and calculate spare scoring correctly", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(3, 7);
        chai.assert.equal(tracker.totalScore, 10, "Spare in first frame (3, 7).");
        chai.assert.equal(tracker.currentFrame, 2, "Start of second frame.");

        tracker.score(5);
        chai.assert.equal(tracker.totalScore, 20, "5 in the first roll of second frame.");
        chai.assert.equal(tracker.currentFrame, 2, "End of second frame.");
    });

    it ("Should take a single frame score, and calculate strike scoring correctly", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(10);
        chai.assert.equal(tracker.totalScore, 10, "Strike in first frame.");
        chai.assert.equal(tracker.currentFrame, 2, "Start of second frame.");

        tracker.score(3);
        chai.assert.equal(tracker.totalScore, 16, "3 in the first roll of second frame.");
        chai.assert.equal(tracker.currentFrame, 2, "End of second frame.");

        tracker.score(6);
        chai.assert.equal(tracker.totalScore, 28, "6 in the second roll of second frame.");
        chai.assert.equal(tracker.currentFrame, 3, "Start of third frame.");
    });

    it ("Should take a game's worth of scores and calculate open frame scoring correctly.", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        chai.assert.equal(tracker.totalScore, 20, "All ones equals 20");
        chai.assert.equal(tracker.currentFrame, 10, "End of game, on last frame.")
    });

    it ("Should take a game's worth of scores and calculate open frame scoring correctly.", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        chai.assert.equal(tracker.totalScore, 20, "All ones equals 20");
        chai.assert.equal(tracker.currentFrame, 10, "End of game, on last frame.")
    });

    it ("Should take a game's worth of scores and calculate spares correctly.", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
        chai.assert.equal(tracker.totalScore, 150, "An all spare game equals 150");
    });

    it ("Should take a game's worth of scores and calculate a perfect game correctly.", function() {
        let tracker = new BowlingScoreTracker();
        tracker.score(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
        chai.assert.equal(tracker.totalScore, 300, "Perfect game equals 300");
    });
});