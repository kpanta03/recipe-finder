from django.urls import path
from .views import SignUpView, SignInView#paxi add gara

# video bata add
# from rest_framework_simplejwt.views import(
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    # paxi add gara
    path('signup/', SignUpView.as_view(), name='signup'),
    path('signin/', SignInView.as_view(), name='signin'),

    # video bata add gareko
    # username="kriti" password="kritika123" api/token garera herni
    # path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    # path('token/refresh',TokenRefreshView.as_view(),name='token_refresh'),

]
