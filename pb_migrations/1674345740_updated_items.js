migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzvht8hg",
    "name": "price_id",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzvht8hg",
    "name": "stripe_id",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
