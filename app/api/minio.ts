import * as Minio from 'minio'
import { env } from 'process'
import { Readable } from 'stream';

const bucket: string = process.env.MINIO_BUCKET || '';

const endpoint = process.env.MINIO_ENDPOINT;

if (!endpoint) {
    throw new Error('MINIO_ENDPOINT is not set')
}


if (!bucket || typeof bucket !== 'string' || bucket.trim() === '') {
    throw new Error('MINO_BUCKET is not set or is empty')
}

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT ? process.env.MINIO_ENDPOINT : 'localhost:9000',
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINO_ACCESS_KEY_ID,
  secretKey: process.env.MINO_SECRET_ACCESS_KEY,
})

export async function getObject(objectName: string): Promise<[Readable, Minio.BucketItemStat]> {
    let objectStream = null;
    let objectMetadata = null;
    try{
        objectMetadata = await minioClient.statObject(bucket, objectName)
        objectStream = await minioClient.getObject(bucket, objectName)
    } catch (error) {
        console.error(error)
        throw new Error('Error getting object from Minio')
    }
    return [objectStream, objectMetadata];
}
