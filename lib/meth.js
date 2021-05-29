// Sorry kate... blame this message from Olikyr
// https://canary.discord.com/channels/538759280057122817/755013450358325260/846966731641323560

const kate = require("..")

/**
 * @param {Object} opts - "Stuff" for Kate.
 * @param {'high'|'average'|'low'} opts.quality - quality of meth
 * @param {'huge'|'normal'|'small'} opts.amount - quality of meth
 * @param {'Olykir'} opts.dealer - dealer of thy meth
 * @param {'Cynthia'|'Ben'|'Alice'|'Joakim'|'Emma'|'Aetheryx'|'Everyone'|'Baby Fox'|'Olykir'} opts.sharedWith - any other staff having it? #sharingiscaring
 */

 module.exports = opts => {
    let kateInfo = 'Ahh, '
    // quality
    if (opts?.quality) {
        switch (opts.quality) {
            case 'high':
                kateInfo = 'WOO, '
                break
            case 'low':
                kateInfo = 'Mehh, '
                break
        }
    }
    // shared with? sharing is caring after all....
   if(opts?.dealer) {
     console.log(`${opts?.dealer} sold some ${opts?.quality ? `${opts.quality} quality` : ""} meth to kate`)
   }
    if (opts?.sharedWith) {
        if (opts.amount == 'small') return console.log('You can\'t share so little!')
        let num = Math.floor(Math.random() * 2) // use for other staff????
        switch (opts.sharedWith.toLowerCase()) {
            case 'everyone':
                if (opts?.amount !== 'huge') return console.log('You\'ll need huge of meth to share with all the staff!');
                kateInfo = kateInfo + "The team had a well needed break after working on v3"
                break
            case 'aetheryx':
                if (num == 1) return console.log('Aetheryx was busy smoking some weed with DankMemer')
                if (num == 2) return console.log("Kate had some with Aetheryx and DankMemer")
                kateInfo = kateInfo + "Kate relaxed with " + 'Aetheryx'
                break
            case 'baby fox':
                return console.log('Baby Fox is too wholesome for meth')
                break
         case 'olykir':
                return console.log('Olykir fucking loves meth! Lets go!!!!')
                break
            default:
                kateInfo = kateInfo + "Kate relaxed with " + opts.sharedWith
                break
        }
    }

    // amount
    if (opts?.amount) kateInfo = kateInfo + " over a " + opts.amount + "bowl of meth"

    // don't let kate die...
    if (opts?.amount == 'huge' && !opts?.sharedWith) return console.log('Baby Fox looked kate deeply into the eyes and Kate stopped before she took any, saving her life')

    return console.log(kateInfo)

 }
