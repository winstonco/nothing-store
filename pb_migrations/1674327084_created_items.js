migrate((db) => {
  const collection = new Collection({
    "id": "djvxh4zzuztfzze",
    "created": "2023-01-21 18:51:24.240Z",
    "updated": "2023-01-21 18:51:24.240Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("djvxh4zzuztfzze");

  return dao.deleteCollection(collection);
})
