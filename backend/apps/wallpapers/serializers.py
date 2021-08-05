from .models import Image, Tag
from rest_framework import serializers



class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Image
        fields = '__all__'

