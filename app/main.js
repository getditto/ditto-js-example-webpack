import { init, Ditto, DocumentID } from '@dittolive/ditto'

(async () => {
  // Initialize the Ditto module:
  await init()

  // Create a Ditto context:
  const identity = { type: 'development', appName: 'live.ditto.js.examples.webpack', siteID: BigInt('123') }
  const ditto = new Ditto(identity, 'ditto.ddb')

  // Get hold of a collection:
  const cars = ditto.store.collection('cars')

  // Insert an entry:
  const fordBlack = {model: "Ford", color: "black"}
  const fordBlackID = new DocumentID('ford-black-123')
  await cars.insert({id: fordBlackID, value: fordBlack})

  // Find an entry by ID:
  const foundFordBlack = await cars.findByID(fordBlackID).exec()
  console.log(foundFordBlack)

  // Remove an entry:
  await cars.findByID(fordBlackID).remove()

  // Done:
  console.log("Done, over and out.")
})()
