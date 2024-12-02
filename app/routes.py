from flask import Blueprint, render_template, request
import requests

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET', 'POST'])