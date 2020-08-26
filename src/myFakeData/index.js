import DATA from './data';

const fakeData = [...DATA];
const shuffle = (d) => {
    for (let i = 0; i < d.length; i++) {
        const idx = Math.round(Math.random()*i);
        [d[i], d[idx]] = [d[idx], d[i]];
    }
}
shuffle(fakeData);
export default fakeData;