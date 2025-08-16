
'''
Database es lo primero que se crea en un servidor de mongo
dentro de ellas estasn las collection
luego las colecciones van a almacenar los document

Para crear una coleccion y un documento,
primero se inserta un documento y automaticamente se crea una coleccion.

Tambien se puede crear la database luego la collection y despues el document
'''
"""
CRUD
Create = Crear
Read = Leer
Update = Actualizar
Delete = Borrar
"""
#Create
'''
insertOne(data, options) -> se le indica el dato a insertar
insertMany(data, options)
'''

#Read
'''
find(filter, options)
findOne(filter, options)
'''
#Update
'''
updateOne(filter,data,options)
updateMany(filter,data,options)
replaceOne(filter,data,options)
'''
#delete
'''
deleteOne(filter, options)
deleteMany(filter, options)
'''
