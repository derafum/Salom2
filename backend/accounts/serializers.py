import logging
from rest_framework import serializers
from .models import CustomUser

logger = logging.getLogger(__name__)

class CustomUserSerializer(serializers.ModelSerializer):
    days_remaining = serializers.ReadOnlyField()

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'telegram_account', 'has_access', 'subscription_duration', 'subscription_start_date', 'days_remaining')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        logger.debug('Validated data: %s', validated_data)
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate(self, data):
        logger.debug('Data for validation: %s', data)
        return super().validate(data)
