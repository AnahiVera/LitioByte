#!/bin/bash

set -e

echo "=========================================="
echo " 🔧 Backend – Automatic Setup"
echo "=========================================="

# Instalar dependencias del backend
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Iniciar backend
echo "🚀 Starting backend..."
npm run start:dev
