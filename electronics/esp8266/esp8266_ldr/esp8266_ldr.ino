void setup() {
  pinMode(16, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(0, OUTPUT);
  pinMode(2, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  digitalWrite(16, LOW);
  digitalWrite(5, LOW);
  digitalWrite(4, LOW);
  digitalWrite(0, LOW);
  digitalWrite(2, LOW);
  
  int sensorValue = analogRead(A0);

  float voltage = sensorValue * (5.0 / 1023.0);

  if (voltage > 0.0 && voltage < 1.5) {
    digitalWrite(16, HIGH);
  } else if (voltage >= 1.5 && voltage < 2.5) {
    digitalWrite(16, HIGH);
    digitalWrite(5, HIGH);
  } else if (voltage >= 2.5 && voltage < 3.5) {
    digitalWrite(16, HIGH);
    digitalWrite(5, HIGH);
    digitalWrite(4, HIGH);
  } else if (voltage >= 3.5 && voltage < 4.5) {
    digitalWrite(16, HIGH);
    digitalWrite(5, HIGH);
    digitalWrite(4, HIGH);
    digitalWrite(0, HIGH);
  } else if (voltage >= 4.5) {
    digitalWrite(16, HIGH);
    digitalWrite(5, HIGH);
    digitalWrite(4, HIGH);
    digitalWrite(0, HIGH);
    digitalWrite(2, HIGH);
  }

  Serial.println(voltage);
  delay(500);
}
