
const createPost = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Post created successfully');
        }, 2000);
    });
};

const deletePost = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Post deleted successfully');
        }, 1500);
    });
};

const getColdDrinks = new Promise((resolve, reject) => {
    resolve('cold drinks');
});

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    console.log('wife: I have the ticket');
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');

    let ticket = await promiseWifeBringingTicks;
    console.log(`husband: I got some ${getPopcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need butter on my popcorn');

    let drinks = await getColdDrinks;
    console.log(`husband: I got ${drinks} too`);

    return ticket;
};

const asyncFunction = async () => {
    try {
        const result1 = await createPost(); 
        const result2 = await deletePost(); 
        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.error(error);
    }
};

preMovie().then((m) => console.log(m));
console.log('person4: shows ticket.');
console.log('person5: shows ticket.');

asyncFunction();
