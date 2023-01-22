migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3coob232",
    "name": "item_image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpg",
        "image/jpeg"
      ],
      "thumbs": [
        "50x50"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3coob232",
    "name": "item_image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpg",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
