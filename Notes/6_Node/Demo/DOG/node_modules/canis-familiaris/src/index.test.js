var expect = require('chai').expect;
var dogBreed = require('./index');


describe('DogBreed-name', function () {
    
    describe('all', function () {
        
        it('should be a array of strings', function () {
            expect(dogBreed.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string'
                });
            }
        });
        it('should contain the dog breed "Rhodesian Ridgeback', function(){
            expect(dogBreed.all).to.include('Rhodesian Ridgeback');
        });
    });
    
    describe('random', function () {
        
        it('should return a random dog breed', function () {
            var randomItem = dogBreed.random();
            expect(dogBreed.all).to.include(randomItem);
        });

        
        it('should return a an array of random items, if passed a number', function () {
            var randomItems = dogBreed.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(dogBreed.all).to.include(item);
            });

        });
        
        
    });
    
});


