$(function() {
    // This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    describe('RSS Feeds', function() {

        // This is our first test to ensure that the allFeeds variable has been defined & not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Using forEach method to loops over allFeeds object to ensure it has a URL defined & not empty.
        it('the URL should be defined & not empty', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeTruthy();
              expect(feed.url.length).not.toBe(0);
            });
        });

        // Using forEach method to loops over allFeeds object to ensure it has a name defined & not empty.
        it('the name should be defined & not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
        
    });

    describe('The menu', function() {

        // The body has a class to hidden menu by default.         
        it('performing the hiding-showing of the menu element', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // The menu will display when it is clicked and it will hide when clicked again.          
        it('the menu changes visibility when the menu is clicked', function() {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false); //TO OPEN.

          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true); //TO CLOSE.
        });

    });

    describe('Initial Entries', function() {

        // To enshure that the .feed container is not empty.
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        it('when the loadFeed function is called & completes its work', function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {

        // To ensure that the loadFeed function's content has been changed when we add a new feed to it.
        beforeEach(function(done) {
          loadFeed(0, function() {
            currentData = $('.feed').html();
            loadFeed(1, function() {
              newData = $('.feed').html();
              done();
            });
          });
        });

        it('new data is loaded and the content changes', function() {
          expect(newData).not.toEqual(currentData);
        });
    });
}());