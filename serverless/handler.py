import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('pinboardTable')

def hello(event, context):

	if event.get('new-item'):
		name = event.get('new-item').get('name')
		desc = event.get('new-item').get('desc')
		price = event.get('new-item').get('price')
		image = event.get('new-item').get('image')

	if event.get('get-items'):
		items = table.scan()
		return items


    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
