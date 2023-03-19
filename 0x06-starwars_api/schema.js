// user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  accountBalance: {
    type: Number,
    required: true,
    default: 0
  }
});

// transfer schema
const transferSchema = new Schema({
  senderId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  receiverId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// super agent schema
const superAgentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

// transaction verification schema
const transactionVerificationSchema = new Schema({
  transactionId: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  }
});

// user profile schema
const userProfileSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  address: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  occupation: {
    type: String,
    required: true
  }
});

// create models based on the schemas
const User = mongoose.model('User', userSchema);
const Transfer = mongoose.model('Transfer', transferSchema);
const SuperAgent = mongoose.model('SuperAgent', superAgentSchema);
const TransactionVerification = mongoose.model('TransactionVerification', transactionVerificationSchema);
const UserProfile = mongoose.model('UserProfile', userProfileSchema);
