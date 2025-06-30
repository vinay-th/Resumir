-- Enable the uuid-ossp extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  full_name VARCHAR(255),
  customer_id VARCHAR(255) UNIQUE,
  price_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'inactive'
);

-- PDF Summaries table
CREATE TABLE pdf_summaries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  original_file_url TEXT NOT NULL,
  summary_text TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'completed',
  title TEXT,
  file_name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  amount INTEGER NOT NULL,
  status VARCHAR(50) NOT NULL,
  stripe_payment_id VARCHAR(255) UNIQUE NOT NULL,
  price_id VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL REFERENCES users(email),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_updated_at_col()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for users table
CREATE TRIGGER set_updated_at_users
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_col();

-- Trigger for pdf_summaries table
CREATE TRIGGER set_updated_at_pdf_summaries
BEFORE UPDATE ON pdf_summaries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_col();

-- Trigger for payments table
CREATE TRIGGER set_updated_at_payments
BEFORE UPDATE ON payments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_col();
