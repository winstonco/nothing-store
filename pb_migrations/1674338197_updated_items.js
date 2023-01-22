migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkznxsxh",
    "name": "featured",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // remove
  collection.schema.removeField("bkznxsxh")

  return dao.saveCollection(collection)
})
