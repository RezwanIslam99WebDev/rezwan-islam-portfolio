<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <EditText
        android:id="@+id/userInput"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter your input"
        android:inputType="text" />

    <Button
        android:id="@+id/submitButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Submit"
        android:layout_gravity="center_horizontal"
        android:marginTop="16dp" />

</LinearLayout>
