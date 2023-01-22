migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u5tefue0",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cj28tdzi",
    "name": "description",
    "type": "text",
    "required": false,
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

  // remove
  collection.schema.removeField("u5tefue0")

  // remove
  collection.schema.removeField("cj28tdzi")

  return dao.saveCollection(collection)
})
